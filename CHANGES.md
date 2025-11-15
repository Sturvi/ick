# Запрашиваемые изменения для сайта ICK

**Дата**: 2025-11-15
**Источник**: Website_Brief _ICK.docx

---

## 1. Дизайн и визуальные изменения

### 1.1. Изменение цвета фона
- **Текущее состояние**: Градиент `linear-gradient(135deg, #1e3c72 0%, #2c5f8d 50%, #6fa3d9 100%)`
- **Требование**: Приблизить цвет фона к цвету логотипа
- **Действие**: Проанализировать цвета логотипа `logo/ick-latest.svg` и обновить цветовую схему

### 1.2. Удаление элемента "Keyfiyyət 100%"
- **Действие**: Найти и удалить текст/элемент "Keyfiyyət 100%" из сайта

### 1.3. Добавление анимации фона
- **Требование**: Добавить видео-фон с анимацией о Карабахе
- **Варианты**:
  - Drone view Шуши
  - Анимация цветка Хари бюльбюль (символ Карабаха)
- **Референс**: https://www.youtube.com/watch?v=99QFohKb4Cs
- **Действие**: Интегрировать видео как background для hero-секции или всего сайта

---

## 2. Контентные изменения

### 2.1. Обновление раздела "About Us"

**Новый текст** (заменить полностью):

```
2024-cü ildə əsası qoyulmuş şirkətimiz, müasir mühəndislik yanaşmaları, qabaqcıl texnoloji həllər və strateji idarəetmə prinsiplərinə əsaslanaraq fəaliyyət göstərir. Şirkətin əsas missiyalarından biri - işğaldan azad olunmuş ərazilərdə infrastrukturun təkmilləşdirilməsi və bərpasıdır.

Bu istiqamətdə fəaliyyətimiz urbanizasiya, infrastruktur mühəndisliyi, tikinti menecmenti və dayanıqlı inkişaf prinsiplərinə əsaslanır.

Şirkətimiz bu ərazilərdə enerji, su, rabitə və sosial infrastruktur komponentlərinin yenidən qurulması və modernləşdirilməsi üzrə kompleks yanaşma tətbiq edir. Məqsədimiz - yalnız tikinti həyata keçirmək deyil, həm də müasir mühəndis sistemləri ilə təchiz edilmiş, ekoloji cəhətdən davamlı və sosial baxımdan funksional şəhər mühitləri formalaşdırmaqdır.

Nəticə etibarilə, şirkətimizin məqsədi - funksional infrastruktur mühitinin formalaşdırılması, ərazilərin iqtisadi inteqrasiyasına, məskunlaşmanın bərpasına və milli inkişaf strategiyasına mühüm töhfə verməkdir.
```

### 2.2. Дополнение раздела "Services"

**Добавить новые сервисы**:

1. **Kommunikasiya sistemlərinin quraşdırılması**
   - Communication Systems Installation

2. **Texniki nəzarət və keyfiyyətə zəmanət**
   - Quality Assurance & Control

3. **Söküntü, bərpa və renovasiya**
   - Demolition & Renovation Services

4. **Memarlıq və mühəndislik dizaynı**
   - Architecture & Engineering Design

**Требование**: Добавить SVG иконки для каждого нового сервиса в стиле существующих (минимализм, тонкие линии)

### 2.3. Обновление раздела "Contact Us"

**Изменения**:
- **Email**: `poladova.leman14@gmail.com` → `info@ick.az`
- **Телефон**: `+995 559 006 503` → `+994 55 900 65 03`
- **Адрес**: Оставить без изменений

---

## 3. Раздел "Partners"

### 3.1. Добавление реальных партнеров

**Заменить плейсхолдеры на**:

1. **Norm OJSC**
   - Website: https://www.norm.az
   - Действие: Получить логотип с сайта

2. **Fab Boya və Kimya Sənayesi MMC**
   - Website: https://www.fabboya.az
   - Действие: Получить логотип с сайта

3. **Real Inshaat LLC**
   - Website: https://realinshaat.az/en
   - Действие: Получить логотип с сайта

---

## 4. Сохранить без изменений

- ✅ Scrolling формат (single-page)
- ✅ Responsive дизайн
- ✅ Структура разделов (Home, About, Services, Gallery, Partners, Contacts)

---

# РОУДМАП РЕАЛИЗАЦИИ

## Фаза 1: Подготовка контента (0.5-1 день)

- [ ] **1.1** Анализ цветов логотипа `logo/ick-latest.svg`
- [ ] **1.2** Подбор/создание видео-фона для hero-секции (drone view Karabakh/Shusha)
- [ ] **1.3** Скачивание логотипов партнеров с их сайтов
- [ ] **1.4** Создание/подбор SVG иконок для 4 новых сервисов

## Фаза 2: Контентные обновления (1-2 часа)

- [ ] **2.1** Обновить текст раздела "About Us" новым текстом из брифа
- [ ] **2.2** Добавить 4 новых сервиса с иконками в раздел "Services"
- [ ] **2.3** Обновить контакты (email, телефон) в разделе "Contact Us"
- [ ] **2.4** Найти и удалить элемент "Keyfiyyət 100%" из кода

## Фаза 3: Дизайн и стилизация (2-3 часа)

- [ ] **3.1** Обновить цветовую схему CSS (primary colors, gradients) под цвет логотипа
- [ ] **3.2** Интегрировать видео-фон в hero-секцию с autoplay/loop/muted
- [ ] **3.3** Добавить overlay для читабельности текста поверх видео
- [ ] **3.4** Обновить раздел Partners с реальными логотипами (с fallback на initials)

## Фаза 4: Тестирование и оптимизация (1-2 часа)

- [ ] **4.1** Проверить responsive на мобильных устройствах
- [ ] **4.2** Оптимизировать размер видео-фона (WebM + MP4 fallback)
- [ ] **4.3** Проверить производительность (PageSpeed Insights)
- [ ] **4.4** Тестирование всех ссылок и форм

## Фаза 5: Деплой (30 минут)

- [ ] **5.1** Коммит изменений в git
- [ ] **5.2** Деплой на хостинг (GitHub Pages или другой)
- [ ] **5.3** Настройка домена (если требуется)
- [ ] **5.4** Финальная проверка на production

---

## Приоритеты

### HIGH (критические изменения)
1. Обновление контактных данных (email, телефон)
2. Обновление текста "About Us"
3. Добавление новых сервисов
4. Добавление реальных партнеров

### MEDIUM (важные улучшения)
1. Изменение цветовой схемы под логотип
2. Добавление видео-фона

### LOW (дополнительные)
1. Удаление "Keyfiyyət 100%" (если найдется)

---

## Оценка времени

- **Минимум (без видео)**: 4-6 часов
- **С видео-фоном**: 8-10 часов
- **С получением контента от клиента**: +2-3 дня ожидания

---

## Риски и зависимости

⚠️ **Видео-контент**: Требуется получить/создать видео о Карабахе (drone view). Если контент не готов - можно использовать статичное изображение с анимацией CSS.

⚠️ **Логотипы партнеров**: Нужно получить разрешение на использование или скачать с официальных сайтов.

⚠️ **Производительность**: Видео-фон может замедлить загрузку сайта на медленных соединениях - нужна оптимизация.

---

## Референсы

- **Тип сайта**: fluidesignstudio.com (scrolling single-page)
- **Видео-фон**: https://www.youtube.com/watch?v=99QFohKb4Cs
- **Партнеры**: norm.az, fabboya.az, realinshaat.az
