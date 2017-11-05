# 1.9 (2017-06-15)

* Adds support for fetching `unit`, `quantity`, and `short_name` for entries.

# 1.8 (2016-01-27)

* Refactoring to support username differences related to logging-in to
  MFP via Facebook.

# 1.7.1 (2016-01-24)

* Fixes bug in measurement iteration on Python 3 (Thanks @dchristle!).
* Moves ``demo.py`` into command-line subcommand named ``day`` with some alterations.

# 1.7 (2016-01-24)

* Adds command-line API.  Currently only two commands have been added: ``store-password`` and ``delete-password``.
* Adds keyring support.  The application will now fetch passwords from the system keyring if they are unspecified.  You can store passwords in the keychain usin g the new ``store-password`` subcommand.

# 1.6 (2015-07-11)

* Adds Python 3 support and drops support for Python 2.6.

# 1.5 (2015-05-15)

* Adds new `get_measurements` method which returns measurements entered into MyFitnessPal.

# 1.4 (2015-03-24)

* Adds support for fetching one's water consumption and notes.

# 1.3 (2014-10-24)

* Connects to MyFitnessPal using a secure connection (https) rather than http.
* Properly alerts you in situations in which you've entered an incorrect username and/or password.
* Allows you to view diaries of users other than the logged-in user.

# 1.2 (2013-08-03)

* Simplifies method signature for selecting diary entries by date.

# 1.1 (2013-07-30)

* Adds unit awareness (optionally -- by using the `unit_aware` keyword argument).

# 1.0 (2013-07-20)

* Initial release.
