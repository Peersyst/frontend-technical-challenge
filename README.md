# 📝 Notes on Development

Test project that integrates the XRPL library using React + Typescript.

## Summary

Even while trying to respect the time limit established by the technical test, I have slightly invested some more hours in favor of learning and documentation. During the development, I have encountered several issues that have slowed down the process, so in order to keep moving forward, I have used some placeholders. Initially, I set up the project with Vite, but after several issues with the XRPL library, I ended up giving in and using create-react-app, although it's not my preferred option. I also tried creating a small Node API, but I discarded it to stick to the requirements of the test.

## Advice

The lists are limited to 10 entries. It was designed to be used for pagination taking that amount as default. Take in count that in Transactions you will
only see the Payment transactions of those 10.

## Encountered problems and conclusions

* I couldn't find the correspondence for some of the values in the API, such as status or reserve.
* The timestamp that was returned to me as a date is converted to old dates.
* Personally, I should have used a CSS framework to speed up the layout process.
* I should have done the lists as tables instead of trying it with unordered lists.
