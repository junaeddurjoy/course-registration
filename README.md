Features:
1. Users can select courses they want to take
2. Credits taken and left will be shown to the users
3. Users will get a message if they exceed credit limit

State Management:
I have created a component folder inside the src folder. The component forlder contains all the components like Courses,Course,Courselist,Credits files. From the App.jsx file, Courses file has been loaded and in the Courses file I have fetched the json file which I have created and then has been mapped to the Course file where all the course has been loaded. After that, an onClick has been called to select the courses and then send the values to the Credits file to load the selected courses and caculate. Finally, Courselist and Calculate has been created to show the courses and calculate the user credits.
