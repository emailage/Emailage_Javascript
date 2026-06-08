> [!WARNING]
> **This repository will no longer be accessible after 30th September 2026.**
>
> This project has been migrated to a consolidated monorepo. Please update your bookmarks, forks,
> and any CI/CD pipelines to point to the new location:
>
> **➡ [https://github.com/lexisnexis-risk-solutions/emailage-public-clients/tree/main/Emailage_Javascript](https://github.com/lexisnexis-risk-solutions/emailage-public-clients/tree/main/Emailage_Javascript)**
>
> No further updates will be made to this repository.# Emailage_Javascript
This project contains javascript methods used to build the request object and submit an ajax request to the Emailage Email Validator. 

## To use
An account sid and account secret for the environment (PROD or SandBox must be provided).
## Request Parameters
A request object can be create using the RequestObject Class in the Models.js file. It contains the possible inputs to the email validator. At a minimum the email or IP cannot be null.

## Sample validator html page
A sample validator html page has been provided to test out functionality. A result class in the model.js file shows the provides a list of result outputs.

## Dependencies
* jsSHA
* jQuery




