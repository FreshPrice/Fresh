import React from "react";
import { Box, Email, Item, Span, renderEmail } from "react-html-email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Meteor } from "meteor/meteor";

const ContactMeTemplate = function(items) {
  return (
    <Email title="Contact Email">
      <Box>
        <Item>
          <Span> Hi! Here's your FRESH grocery list. </Span>
          <List>
            {items.items.map((text, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText
                    primary={text.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {"$ " + text.price + " " + text.unit}
                        </Typography>
                        {" " + text.location.address}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Item>
      </Box>
    </Email>
  );
};

export const GetContactEmail = function(items) {
  return renderEmail(<ContactMeTemplate items={items} />);
};
