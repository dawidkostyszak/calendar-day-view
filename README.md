## Writeup

- What choices did you make and why?
  - I choose to use css grid for showing calendar events as it gives the best functionality to position it.
  - I have used `date-fns` library for date manipulations and format, as it's light-weight and gives possibility for code splitting.
  - I added eslint and preetier for code analyzing and formatting, it's reducing time spent on paying attention to simple formatting things, so can focus on a problem-solving rather than how I write a code.
- What challenges did you face?
  - One of challenge was to correctly show times as application could be used across multiple timezones, so for now I just used GMT timezone to format times.
  - The other challenge was to only change width of event card when it's collapsing with other event, I spent a couple of minutes playing with css and didn't find solution for that.
- What tradeoffs did you choose?
  - One of tradeoffs was not to add tests, there were no logic in code to test, so I decided to not add them as they would only check visual part of application. I thought to use snapshot tests for it but to add them and configure would need a bit more time to do it.
  - The other tradeoff was about styling for mobile version of app. Events aren't wrapping well for mobile devices, and if title of event would be longer it can break look of a card.
- What do you like and not like about your solution?
  - My solution is very simple and use css and html elements structure to solve the problem.
  - I see some places where I could improve the solution as it brakes for mobile. Some of a styling could be improved, but I didn't pay too much attention to it.
  - I would definitely add tests as they give confidence and stability of the app.
- What areas would you work on next?
  - I would improve functionality of this app.
  - The next step would probably be to add details view of the event.
  - Other step would be to add edit mode of the event.

## Feedback
- Task looks very simple but there are some areas to think about how to solve it.
- It isn't trivial case where events could collapse and need to calculate width of cards.
- I would recommend to set up eslint and prettier by default to the task as it gives some extra time to thinking about solution and coding.
