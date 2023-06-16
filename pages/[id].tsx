import { Input } from "@chakra-ui/react";
import Button from "components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Item, Vote } from "types/PollData";

const Poll: React.FC = () => {
  const router = useRouter();
  const session = useSession();
  const { id } = router.query;
  const [pollData, setPollData] = useState<any>(null); // replace any with the type of your poll data
  const [submittedItems, setSubmittedItems] = useState<Item[]>([]);
  const { register, handleSubmit, reset } = useForm<Item>();

  useEffect(() => {
    if (id) {
      fetch(`/api/getPoll?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPollData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [id]);

  if (!pollData) {
    return <div>Loading...</div>;
  }

  const addItem = async (item: Item) => {
    item.author = session?.data?.user?.id || "";
    try {
      const response = await fetch("/api/updatePoll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, item }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const newItem = await response.json();
      setSubmittedItems([...submittedItems, item]);
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  const voteForItem = async (itemId: number | undefined) => {
    try {
      const userId = session?.data?.user?.id || "";
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId, userId }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await fetch(`/api/getPoll?id=${id}`).then((res) =>
        res.json()
      );
      setPollData(data);
      setSubmittedItems([]);
    } catch (error) {
      console.error(error);
    }
  };

  const unvote = async (itemId: number | undefined) => {
    try {
      const userId = session?.data?.user?.id || "";
      const response = await fetch("/api/unvote", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId, userId }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await fetch(`/api/getPoll?id=${id}`).then((res) =>
        res.json()
      );
      setPollData(data);
      setSubmittedItems([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Poll: {pollData?.title}</h1>
      {/* @ts-ignore */}
      {pollData.items.length !== 0 && (
        <div className="mb-10">
          {pollData.items.map((item: Item, index: number) => {
            const userId = session?.data?.user?.id || "";
            const hasVoted = item?.votes?.some(
              (vote: Vote) => vote.userId === userId
            );
            return (
              <div key={index} className="frame flex">
                <div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </div>
                <div className="ml-auto">
                  <div className="flex justify-center">
                    {item?.votes?.length}
                  </div>
                  <Button
                    onClick={() =>
                      hasVoted ? unvote(item.id) : voteForItem(item.id)
                    }
                  >
                    {hasVoted ? "Unvote" : "Vote"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {submittedItems.map((item, index) => {
        return (
          <div key={index} className="frame">
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit(addItem)}>
        <Input {...register("title")} placeholder="Item Title" required />
        <Input
          {...register("description")}
          placeholder="Item Description"
          required
        />
        <Button type="submit">Add Item</Button>
      </form>
    </div>
  );
};

export default Poll;
