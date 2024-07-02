# Project Name: Blog Card

This project is a front-end component that displays a blog card. It is designed to be used in web applications and can be easily integrated into existing projects.

## API

The component takes the following props:

- `size` (string): Controls the size of the card. The specific values it accepts and their effects (e.g., small, medium, large)
- `title` (string): The title of the card. This is typically displayed prominently at the top of the card and should be a concise summary of the card's content
- `img` (img): The URL of an image to display on the card. This can be used to visually represent the content of the card.
- `imgAlt ` (string): (optional, default ""): An alternative text for the image, improving accessibility by describing the image if it cannot be displayed or for screen reader users.
- `description` (string): A brief description of the blog post.
- `linkText` (string): (optional, default "Read more"): The text for a call-to-action link on the card. This can be customized to better fit the action you want users to take (e.g., "Learn More", "Sign Up").
- `badges` (optional, default []): An array of badge objects or strings that categorize or tag the card. Badges can be used to indicate the status of the card's content (e.g., "New", "Popular") or its categorization (e.g., "Technology", "Health").
- `anchorHref` (optional, default "#"): The URL that the card's call-to-action link points to. This is where the user will be directed upon clicking the link.
- `onTagClick`: A callback function that is executed when a badge is clicked. This can be used to implement custom behavior, such as filtering a list of cards based on the selected badge.


To use the component, simply import it into your project and pass the necessary props. Here's an example:

```jsx
import Card from '@epiphanyzz/blog-card';

function App() {
  return (
    <div>
      <Card 
        img={img}
        size={'medium'}
        badges={[
          id: 1,
          bold: false,
          color: 'primary',
          italic: false,
          size: 'small',
          text: 'Badge '
        ]}
        title={'Top 5 Living Rooms Insperations'}
        description={'Curated vibrants colors for your living, make it pop & calm in the same time.'}
      />
    </div>
  );
}
```

Feel free to customize the component's styling and behavior to fit your project's requirements.

