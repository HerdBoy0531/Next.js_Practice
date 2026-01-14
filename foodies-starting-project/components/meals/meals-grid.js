import classes from './meals-grid.module.css'
import MealItem from './meal-item.js'

export default function MealsGrid({meals}){
  return(
   <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
        {/* <li key={meal.slug}> */}
          <MealItem {...meal}/>
        </li>
      ))}
    </ul>
  )
}