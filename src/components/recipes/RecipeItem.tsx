import React from "react";
import "./RecipeItem.css";
import { RecipeType } from "../../App";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type PropType = {
  recipe: RecipeType;
  favoriteList: RecipeType[];
  setFavoriteList: React.Dispatch<React.SetStateAction<RecipeType[]>>;
};
const RecipeItem = ({ recipe, favoriteList, setFavoriteList }: PropType) => {
  const [expanded, setExpanded] = React.useState(false);

  const pressed = favoriteList.includes(recipe) ? true : false;
  console.log(pressed, "pressed");
  const [clicked, setClicked] = React.useState(pressed);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeFromFavorite = (id: string) => {
    const filteredList = favoriteList.filter((item) => item.idMeal !== id);
    setFavoriteList(filteredList);
  };

  const heartClickHandler = () => {
    if (clicked) {
      //remove handler
      removeFromFavorite(recipe.idMeal);
      setClicked(false);
    } else {
      setFavoriteList([...favoriteList, recipe]);
      console.log(favoriteList);
      setClicked(true);
    }
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {recipe.strMeal[0]}
            </Avatar>
          }
          title={recipe.strMeal}
          subheader={recipe.strCategory}
        />
        <CardMedia
          component="img"
          height="194"
          image={recipe.strMealThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <span className="ingredientTitle">Ingredients:</span>
          </Typography>
          <Typography>
            <ol>
              <li>
                {recipe.strIngredient1}: {recipe.strMeasure1}
              </li>
              <li>
                {recipe.strIngredient2}: {recipe.strMeasure2}
              </li>
              <li>
                {recipe.strIngredient2}: {recipe.strMeasure3}
              </li>
            </ol>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={heartClickHandler}
              style={{ color: clicked ? "red" : "" }}
            />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default RecipeItem;
