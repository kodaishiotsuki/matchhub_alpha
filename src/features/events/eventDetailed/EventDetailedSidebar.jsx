import React from "react";
import { Link } from "react-router-dom";
import { Item, Label, Segment } from "semantic-ui-react";

export default function EventDetailedSidebar({ attendees, hostUid }) {
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees.length} Member
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((attendee) => (
            <Item
              as={Link}
              to={`/profile/${attendee.id}`}
              key={attendee.id}
              style={{ position: "relative" }}
            >
              {hostUid === attendee.id && (
                <Label
                  style={{ position: "absolute" }}
                  color='orange'
                  ribbon='right'
                  content='Foundered'
                />
              )}
              <Item.Image
                size='tiny'
                circular
                src={attendee.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>{attendee.displayName}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}
