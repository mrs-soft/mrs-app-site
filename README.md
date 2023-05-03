# Лендинг компании Цитрониум

## Требования

- [Jekyll](https://jekyllrb.com/)
- [Ruby](https://www.ruby-lang.org/en/downloads/) 2.5.0 и выше
- [RubyGems](https://rubygems.org/pages/download)
- [GCC](https://gcc.gnu.org/install/) и [Make](https://www.gnu.org/software/make/)

## Разрабатываемое окружение

- Ruby 3.2.2
- Gem 3.3.7

## Быстрый старт

1. Склонируйте проект

```sh
git clone ...
```

2. Перейдите в папку с проектом

3. Установка зависимостей

```sh
bundle install
```

4. Запуск проекта

Без JEKYLL_ENV, по умолчанию development

```sh
bundle exec jekyll serve
```

или

```sh
bundle exec jekyll serve --livereload
```

или

```sh
bundle exec  jekyll serve --livereload --baseurl=""
```

Production

```sh
JEKYLL_ENV=production bundle exec jekyll serve
```

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

## Структура проекта

```sh
.
├── _data
|   ├── mane_page.json //Главная страница
|   ├── mrs_page.json //Страница платформы
|   ├──
|   └── texts_app.json //Тексты header, footer и разлмчных компонентов
├── _includes // HTML куски, встраиваемые в других файлах
├── _posts // Каркас продуктов
├── _sass // Стили
├── _site // Билд проекта, генерирует Jekyll. В репозитории его нет.
├── assets // Картинки, скрипты, главный файл стилей

```

## Добавление нового продукта

1. Создайте файл с расширением .md в папке \_posts: ДАТА-имя.md

2. В шапке заполнить Front Matter

Пример:

```sh
---
layout: default //Используемый шаблон (будет доьавлен на главную страницу)
permalink: /mrs //Желаемый вид uri в браузере

productTitle: //Титул в списке проектов
productDescription: //Описание в списке проектов
registration: //Текст, где зарегистрирован
registratinLink: //Ссылка на документ регистрации

image: "/assets/img/projects/prev/isup-prev.png" //Картинка продукта
prevPosition: right //Расположение картинки в списке проектов
---
```

3. Указать путь до шаблона страницы продукта

```
{%- include mrs/first-section.html -%} {%- include mrs/price-section.html -%} {%- include mrs/questions-section.html
  -%}
```

4. Создать в папке /\_includes html шаблон, добавленного продукта

## FAQ

- [Установка Jekyll](https://jekyllrb.com/docs/installation/)
