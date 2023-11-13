import React, { useEffect } from "react";
import { People } from "@/data/people";
import { useDispatch } from "react-redux";
import { addPeople } from "@/redux/states";
import { PeopleTable } from "./components";

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
