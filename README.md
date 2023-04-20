# YourUni sample project

I chose to build the app using Next.js because React recently removed create-react-app from their documentation and now recommends starting boilerplate projects using Next.js.

To fetch university data, I decided to do this asynchronously because I noticed the dataset was incomplete. A full dataset would create a large page payload and slow down the initial load. Given the dataset size, it might be more efficient to run the search on the server for improved performance.

## Running the project locally

1. Clone the repo
2. `yarn install`
3. `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser.
