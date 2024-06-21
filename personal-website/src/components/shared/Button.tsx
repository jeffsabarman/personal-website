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
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="text-xl text-blue-light" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
