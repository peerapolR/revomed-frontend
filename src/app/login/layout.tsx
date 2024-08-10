import React from "react";

const title = "Login";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/assets/background/loginBG.png')`,
      }}
    >
      {children}
    </div>
  );
};

export default RootLayout;
