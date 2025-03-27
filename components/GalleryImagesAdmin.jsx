import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function GalleryImagesAdmin({ itemData }) {
  //console.log(itemData ? itemData.data : "");
  console.log(itemData);
  return (
    <>
      {itemData ? (
        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">December</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item._id}>
              <img
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}`}
                alt={item.projectName}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.projectType}
                subtitle={item.beforeAfter}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.projectName}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <></>
      )}
    </>
  );
}
