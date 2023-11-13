import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from ".";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {

  const statePeople = useSelector((store: AppStore) => store.people)
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            By Daniel Rangel
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
