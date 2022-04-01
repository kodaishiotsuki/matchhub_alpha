import React from "react";
import { Header, Menu } from "semantic-ui-react";
// import Calender from "react-calendar"
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../eventActions";

export default function EventFilter({ loading }) {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.event);
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <>
      {authenticated && (
        <Menu vertical size='large' style={{ width: "100%" }}>
          <Header icon='filter' attached color='teal' content='Filters' />
          <Menu.Item
            content='All Companies'
            active={filter === "all"}
            onClick={() => dispatch(setFilter("all"))}
            disabled={loading}
          />
          <Menu.Item
            content='My company'
            active={filter === "isHosting"}
            onClick={() => dispatch(setFilter("isHosting"))}
            disabled={loading}
          />
        </Menu>
      )}
      {authenticated && (
        <Menu vertical size='large' style={{ width: "100%" }}>
          <Header icon='search' attached color='teal' content='Select career' />
          <Menu.Item
            content='エンジニア'
            active={filter === "engineer"}
            onClick={() => dispatch(setFilter("engineer"))}
            disabled={loading}
          />
          <Menu.Item
            content='デザイナー'
            active={filter === "designer"}
            onClick={() => dispatch(setFilter("designer"))}
            disabled={loading}
          />
        </Menu>
      )}
      {/* <Button content='エンジニア' /> */}
      {/* <Header icon='calendar' attached color='teal' content='Select date' />
      <Calender
        onChange={(createdAt) => setPredicate("startDate", createdAt)}
        value={predicate.get("startDate") || new Date()}
        tileDisabled={() => loading}
      /> */}
    </>
  );
}
