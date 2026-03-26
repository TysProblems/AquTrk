# Watey

Watey is a web application that helps users track how much water they drink each day and remember to stay hydrated.

## tech stack

- Frontend: React / TypeScript
- Backend: Supabase
- Database: PostgreSQL (Supabase)
- Deployment: Vercel + Railway

## Functionality

Users will be able to:

- create an account
- set how much water they want to drink each day
- see how much water they have consumed so far (shown visually with a water bottle display that fills up when tapped)
- track their water consumption from previous days

## Lifestyle

After a user creates an account, a modal appears asking: "How much water do you want to drink today?"  
The modal should also show a common daily water-intake reference amount.

After the user selects a goal, the modal closes and an empty water bottle appears. Each time the user drinks a full bottle, they return to the app and tap the bottle to fill it up. The daily tracker is complete once the bottle reaches the top.

Users can then go to the calendar to review and track other days.

## style

The application should be minimal. Since the app is about water, use different shades of blue throughout the interface.

Navigation should stay simple with only 3 tabs:

- Calendar
- Bottle
- Profile

The profile page should display:

- account creation date
- total number of bottles consumed
- profile picture
