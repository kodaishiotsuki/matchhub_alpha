import React, { useState } from "react";
import { Button, Grid, Icon, Label, Segment } from "semantic-ui-react";
import { format } from "date-fns";
import EventDetailedMap from "./EventDetailedMap";
import YouTube from "react-youtube";
import style from "./Youtube.module.css";
import { useSelector } from "react-redux";

export default function EventDetailedInfo({ event }) {
  const { authenticated } = useSelector((state) => state.auth);
  const [mapOpen, setMapOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const opts = {
    playerVars: {
      autoplay: 0,
      mute: 1,
      playsinline: 1,
      loop: 1,
      playlist: event.pitchId,
    },
  };
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='building' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(event.date, "yyyy/MM/dd ")}</span>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='users' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={15}>
            <Label
              className='ui teal tag label'
              content={event.career[0]}
              style={{ marginRight: 25 }}
            />
            <Label
              className='ui teal tag label'
              content={event.career[1]}
              style={{ marginRight: 25 }}
            />
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='video' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{`${event.title}の紹介PITCH`}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => setVideoOpen(!videoOpen)}
              color='teal'
              size='tiny'
              content={videoOpen ? "Hide Video" : "Show Video"}
              disabled={!authenticated}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {videoOpen && (
        <YouTube
          videoId={event.pitchId}
          className={style.iframe}
          containerClassName={style.youtube}
          opts={opts}
          width='1600px'
        />
      )}

      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='marker' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue.address}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => setMapOpen(!mapOpen)}
              color='teal'
              size='tiny'
              content={mapOpen ? "Hide map" : "Show Map"}
              disabled={!authenticated}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {mapOpen && <EventDetailedMap latLng={event.venue.latLng} />}
    </Segment.Group>
  );
}
