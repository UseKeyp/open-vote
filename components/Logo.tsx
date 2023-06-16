interface LogoProps {
  variant: "small" | "big"
}

const LogoSvg: React.FC<LogoProps> = ({variant}) => {
  return (
    <svg width={variant === 'big' ? '281' : '64'} height={variant === 'big' ? '281' : '64'} viewBox="0 0 281 281" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M278.923 279.531H279.531V278.923V4.43342C279.531 2.7535 278.17 1.39165 276.49 1.39165H4.43342C2.7535 1.39165 1.39165 2.75349 1.39165 4.43342V278.923V279.531H2H278.923Z" fill="#77C118"/>
      <path d="M32.7142 100.198V68.3039C32.7142 56.6093 42.1762 47.0409 53.9772 47.0409C65.7782 47.0409 75.2403 56.5029 75.2403 68.3039V100.198C75.2403 112.106 65.7782 121.462 53.9772 121.462C42.1762 121.462 32.7142 111.999 32.7142 100.198ZM59.293 67.2408C59.293 66.1776 59.6119 65.3271 60.1435 64.3703L61.313 62.4566L59.7182 60.9682L57.9109 62.1376C57.0603 62.7755 56.1035 62.9882 55.0404 62.9882H52.9141C51.8509 62.9882 50.7877 62.7755 50.0435 62.1376L48.2362 60.9682L46.6415 62.4566L47.8109 64.3703C48.2362 65.3271 48.6614 66.1776 48.6614 67.2408V101.262C48.6614 102.325 48.2362 103.282 47.8109 104.132L46.6415 106.046L48.2362 107.534L50.0435 106.365C50.7877 105.833 51.8509 105.514 52.9141 105.514H55.0404C56.1035 105.514 57.0603 105.833 57.9109 106.365L59.7182 107.534L61.313 106.046L60.1435 104.132C59.6119 103.282 59.293 102.325 59.293 101.262V67.2408ZM110.374 62.9882C109.311 62.9882 108.248 62.7755 107.504 62.1376L105.696 60.9682L104.102 62.4566L105.271 64.3703C105.696 65.3271 106.122 66.1776 106.122 67.2408V72.025C106.122 73.0881 105.696 74.045 105.271 74.8955L104.102 76.8091L105.696 78.2976L107.504 77.1281C108.248 76.5965 109.311 76.2776 110.374 76.2776H111.437C114.414 76.2776 116.753 73.9386 116.753 70.9618V68.3039C116.753 65.3271 114.414 62.9882 111.437 62.9882H110.374ZM90.1742 121.462V47.0409H111.437C123.132 47.0409 132.7 56.6093 132.7 68.3039V70.9618C132.7 82.6565 123.132 92.2249 111.437 92.2249H110.374C109.311 92.2249 108.354 91.9059 107.504 91.3743L105.696 90.2049L104.208 91.6933L105.377 93.607C105.909 94.4575 106.122 95.4143 106.122 96.4775V121.462H90.1742ZM190.16 105.514V121.462H147.634V47.0409H190.16V62.9882H167.834C166.771 62.9882 165.814 62.6692 164.964 62.1376L163.156 60.9682L161.668 62.4566L162.837 64.3703C163.369 65.2208 163.582 66.1776 163.582 67.2408V72.025C163.582 73.0881 163.369 74.045 162.837 74.8955L161.668 76.8091L163.156 78.2976L164.964 77.1281C165.814 76.5965 166.771 76.2776 167.834 76.2776H184.845V92.2249H167.834C166.771 92.2249 165.814 91.9059 164.964 91.3743L163.156 90.2049L161.668 91.6933L162.837 93.607C163.369 94.4575 163.582 95.4143 163.582 96.4775V101.262C163.582 102.325 163.369 103.282 162.837 104.132L161.668 106.046L163.156 107.534L164.964 106.365C165.814 105.833 166.771 105.514 167.834 105.514H190.16ZM221.042 84.3575L218.915 84.8891L220.616 90.6301C220.829 91.587 220.935 92.5438 220.935 93.5006V121.462H204.988V47.0409H220.935L231.567 84.2512L233.693 83.7196L231.992 77.9786C231.779 77.0218 231.673 76.0649 231.673 75.1081V47.0409H247.62V121.462H231.673L221.042 84.3575ZM37.9236 233.462L32.6078 159.147H48.5551L52.8077 217.514H55.0404L59.1867 159.147H75.1339L69.8182 233.462H37.9236ZM90.1742 212.198V180.304C90.1742 168.609 99.6363 159.041 111.437 159.041C123.238 159.041 132.7 168.503 132.7 180.304V212.198C132.7 224.106 123.238 233.462 111.437 233.462C99.6363 233.462 90.1742 223.999 90.1742 212.198ZM116.753 179.241C116.753 178.178 117.072 177.327 117.604 176.37L118.773 174.457L117.178 172.968L115.371 174.138C114.52 174.776 113.564 174.988 112.5 174.988H110.374C109.311 174.988 108.248 174.776 107.504 174.138L105.696 172.968L104.102 174.457L105.271 176.37C105.696 177.327 106.122 178.178 106.122 179.241V213.262C106.122 214.325 105.696 215.282 105.271 216.132L104.102 218.046L105.696 219.534L107.504 218.365C108.248 217.833 109.311 217.514 110.374 217.514H112.5C113.564 217.514 114.52 217.833 115.371 218.365L117.178 219.534L118.773 218.046L117.604 216.132C117.072 215.282 116.753 214.325 116.753 213.262V179.241ZM176.871 179.241V233.462H160.924V179.241C160.924 178.178 161.136 177.327 161.668 176.37L162.837 174.457L161.349 172.968L159.542 174.138C158.691 174.776 157.734 174.988 156.671 174.988H147.634V159.041H190.16V174.988H181.124C180.06 174.988 178.997 174.776 178.253 174.138L176.446 172.968L174.851 174.457L176.02 176.37C176.446 177.327 176.871 178.178 176.871 179.241ZM247.62 217.514V233.462H205.094V159.041H247.62V174.988H225.294C224.231 174.988 223.274 174.669 222.424 174.138L220.616 172.968L219.128 174.457L220.297 176.37C220.829 177.221 221.042 178.178 221.042 179.241V184.025C221.042 185.088 220.829 186.045 220.297 186.895L219.128 188.809L220.616 190.298L222.424 189.128C223.274 188.597 224.231 188.278 225.294 188.278H242.305V204.225H225.294C224.231 204.225 223.274 203.906 222.424 203.374L220.616 202.205L219.128 203.693L220.297 205.607C220.829 206.457 221.042 207.414 221.042 208.477V213.262C221.042 214.325 220.829 215.282 220.297 216.132L219.128 218.046L220.616 219.534L222.424 218.365C223.274 217.833 224.231 217.514 225.294 217.514H247.62Z" fill="white"/>
      <path d="M278.923 279.531H279.531V278.923V4.43342C279.531 2.7535 278.17 1.39165 276.49 1.39165H4.43342C2.7535 1.39165 1.39165 2.75349 1.39165 4.43342V278.923V279.531H2H278.923Z" stroke="#77C118" strokeWidth="1.21671"/>
    </svg>
  )
}

const Logo: React.FC<LogoProps> = ({variant}) => {
  return (
    <LogoSvg variant={variant}/>
  );
};

export default Logo;
