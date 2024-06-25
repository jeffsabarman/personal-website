// ---
// interface Props {
// 	label: string;
//     onClick?: () => void
// }

// const { label, onClick } = Astro.props;

// ---
// <!-- <div class="cursor-pointer">
//     <p class="text-xl text-blue-light font-normal">{label}</p>
// </div> -->
// <button class="text-xl text-blue-light">{label}</button>
// <script>
//     const button = document.querySelector("button")

//     button?.addEventListener('click', () => {
//         onClick()
//     })
// </script>

import type { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  label: string;
  route: string;
}

const Button: React.FC<ButtonProps> = ({ children, route, label }) => {
  return (
    <button
      className="text-md text-blue-light"
      onClick={() => {
        console.log(route);
      }}
    >
      <div className="flex space-x-4 items-center">
        <p>{label}</p>
        <div>{children}</div>
      </div>
    </button>
  );
};

export default Button;
