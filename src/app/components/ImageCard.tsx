import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { DataType } from "../lib/types";

export function ImageCardWrapper(props: { datas: DataType[] }) {
  return (
    <Stack
      gap={5}
      flexWrap="wrap"
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      {props.datas.map((data: DataType) => {
        return <ImageCard key={data.title} {...data} />;
      })}
    </Stack>
  );
}

export default function ImageCard(props: DataType) {
  return (
    <Card className="w-3/12">
      <CardMedia
        sx={{ height: 200 }}
        image={props.img_src}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
