import { StateDrawerOpen } from "@/app/(front-end)/lib/atoms";
import { Drawer, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";

export default function DrawerLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useRecoilState(StateDrawerOpen);

  function onDrawerClose() {
    setOpen(false);
  }
  return (
    <Drawer
      PaperProps={{
        sx: {
          width: {
            xs: "100%",
            sm: "80%",
          },
          height: {
            xs: "90%",
            sm: "100%",
          },
        },
      }}
      anchor="right"
      open={open}
      onClose={onDrawerClose}
    >
      {children}
    </Drawer>
  );
}

export const DrawerHeader = ({ title }: { title: string }) => {
  const [open, setOpen] = useRecoilState(StateDrawerOpen);

  return (
    <div className="flex items-center bg-primary p-6 text-white">
      <button className="w-10" onClick={() => setOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M321.94 98L158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18Z"
          />
        </svg>
      </button>
      <Typography variant="h5">{title}</Typography>
    </div>
  );
};
