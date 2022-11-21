# Lab 8 - Starter
<p>No partners </p>

<p>
1) Where would you fit your automated tests in your project development pipeline? Select one of the following and explain why.

I select "within a Github action that runs whenever code is pushed." As we continue to push, we should actively/consistently be testing all team member's code. We also need to test that our code works in production, not just our local.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No. To check if a function is returning the correct output, one should use unit testing.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, by the definiton of message given it sounds like this is a multistep process and captures all of the user actions within the app. Thus, it sounds like an end-to-end test is more suitable.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, by the defintion of "max message length" given, this is single feature. Thus it can be tested with unit testing on a small scale.
</p>
