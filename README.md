### Installation

Following instructions should kick-off the development environment
```
composer install
vendor/bin/sail up
vendor/bin/sail npm install
vendor/bin/sail npm run dev
vendor/bin/sail artisan migrate:fresh --seed
```
