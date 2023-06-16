import { Input } from "@chakra-ui/react";
import Button from "../components/Button";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { FormData, Item } from "types/PollData";

import { signOut, useSession, signIn } from "next-auth/react";
import UserAccount from "components/UserAccount";

const Create = () => {
  const { register, handleSubmit, control } = useForm<FormData>();

  const session = useSession();
  const router = useRouter();

  const [items, setItems] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState<Item>({
    title: "",
    description: "",
    author: "default",
  });

  const saveItem = () => {
    setItems([...items, currentItem]);
    setCurrentItem({ title: "", description: "", author: "default" });
  };

  const handleGoogleLogin = () => {
    signIn("keyp", undefined, "login_provider=GOOGLE");
  };

  const onSubmit = async (data: FormData) => {
    if (session.status === "authenticated" && session.data?.user) {
      data.author = session.data.user.id;
      data.items = items.map((item: Item) => ({
        ...item,
        author: session.data.user.id,
      }));

      const response = await fetch("/api/createPoll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("There was an error creating the poll.");
        return;
      }

      const createdPoll = await response.json(); // this is the created poll from your API      // Navigate to the dynamic route
      router.push(`/${createdPoll.id}`); // assumes the createdPoll object has an id property
    } else if (session && session.status === "unauthenticated") {
      // save data locally using setState
      // redirect to login page
      console.log("Please login")
    }
  };

  return (
    <>
      {session.status === "unauthenticated" ? (
        <Button type="button" onClick={() => handleGoogleLogin()}>
          Login with Google
        </Button>
      ) : (
        <UserAccount
          currentUser={session.data?.user}
          logOut={signOut}
        ></UserAccount>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("title")} required placeholder="Add a Poll Title"/>
        <Input {...register("description")} required placeholder="Write a short description about what you’re voting on."/>
        {items &&
          items.map((item, index) => {
            return (
              <>
                <div key={index} className="frame">
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </div>
              </>
            );
          })}

        <div className="flex">
          <div>
            <Input
              value={currentItem.title}
              placeholder="Title"
              onChange={(e) =>
                setCurrentItem({ ...currentItem, title: e.target.value })
              }
            />
            <Input
              value={currentItem.description}
              placeholder="Add a short description"
              onChange={(e) =>
                setCurrentItem({ ...currentItem, description: e.target.value })
              }
            />
          </div>
          <Button type="button" onClick={saveItem}>
            Save
          </Button>
        </div>
        <Button type="submit" className="flex ml-auto">Publish Poll</Button>
      </form>
    </>
  );
};

export default Create;
