# Руководство по видео-фону для Hero секции

## Референс
**YouTube**: https://www.youtube.com/watch?v=99QFohKb4Cs

## Требуемый контент

### Варианты видео:
1. **Drone view Шуши** (рекомендуется)
   - Аэросъемка города Шуша с высоты
   - Продолжительность: 15-30 секунд (loop)
   - Медленные плавные движения камеры

2. **Анимация Хари бюльбюль** (альтернатива)
   - Символ Карабаха (цветок Khari Bulbul)
   - Анимация распускания или плавное движение
   - Продолжительность: 10-20 секунд (loop)

---

## Технические требования к видео

### Формат и кодек:
- **Формат**: MP4 (H.264) + WebM (VP9) для лучшей совместимости
- **Разрешение**: 1920x1080 (Full HD) минимум
- **Соотношение сторон**: 16:9
- **FPS**: 30 fps
- **Битрейт**: 2-4 Mbps (оптимизированный для веба)

### Размер файла:
- **Целевой размер**: 3-5 MB для 15-30 секунд
- **Максимум**: 10 MB (для лучшей загрузки)

### Оптимизация:
```bash
# Конвертация в WebM (ffmpeg)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M -c:a libvorbis output.webm

# Конвертация в оптимизированный MP4
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M -vf scale=1920:1080 output.mp4
```

---

## Варианты реализации

### Вариант 1: HTML5 Video (рекомендуется)

**Преимущества**:
- Нативная поддержка браузерами
- Автоматический loop и autoplay
- Легко интегрировать

**Код для интеграции**:

```html
<section id="home" class="hero-section">
  <video class="hero-video-bg" autoplay muted loop playsinline>
    <source src="assets/video/karabakh-hero.webm" type="video/webm">
    <source src="assets/video/karabakh-hero.mp4" type="video/mp4">
    <!-- Fallback gradient if video fails -->
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Investment Company of Karabakh</h1>
    <p>Azərbaycanın azad edilmiş ərazilərinin yenidən qurulmasında etibarlı tərəfdaş</p>
    <a href="#contact" class="cta-button">Əlaqə saxlayın</a>
  </div>
</section>
```

**CSS**:

```css
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 0;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 48, 86, 0.7); /* Темно-синий overlay */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
}

/* Mobile: статичное изображение вместо видео */
@media (max-width: 768px) {
  .hero-video-bg {
    display: none;
  }

  .hero-section {
    background: linear-gradient(135deg,
      rgba(26, 48, 86, 0.9) 0%,
      rgba(44, 95, 141, 0.8) 100%
    ),
    url('assets/img/karabakh-fallback.jpg');
    background-size: cover;
    background-position: center;
  }
}
```

---

### Вариант 2: Animated CSS Background (если видео недоступно)

Если клиент не предоставит видео, можно использовать **CSS анимацию** с градиентом:

```css
.hero-section {
  background: linear-gradient(
    135deg,
    #1a3056 0%,
    #2c5f8d 25%,
    #4a7ba7 50%,
    #2c5f8d 75%,
    #1a3056 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

### Вариант 3: Parallax изображение (легкая альтернатива)

Статичное изображение Карабаха с parallax эффектом:

```html
<section id="home" class="hero-section"
         style="background-image: url('assets/img/shusha-hero.jpg');">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <!-- content -->
  </div>
</section>
```

```css
.hero-section {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

---

## Производительность и оптимизация

### Lazy Loading стратегия:
1. **Preload poster image** для мгновенного отображения
2. **Загрузка видео** только после DOMContentLoaded
3. **Отключение видео** на мобильных устройствах (используем статичное изображение)

```html
<video class="hero-video-bg"
       poster="assets/img/video-poster.jpg"
       autoplay muted loop playsinline
       preload="metadata">
  <source src="assets/video/karabakh-hero.webm" type="video/webm">
  <source src="assets/video/karabakh-hero.mp4" type="video/mp4">
</video>
```

### JavaScript для оптимизации:

```javascript
// Загрузка видео только на desktop
if (window.innerWidth > 768) {
  const video = document.querySelector('.hero-video-bg');
  if (video) {
    video.play().catch(err => {
      console.log('Video autoplay failed:', err);
    });
  }
} else {
  // На мобильных скрыть видео
  const video = document.querySelector('.hero-video-bg');
  if (video) video.remove();
}
```

---

## Файловая структура

```
assets/
├── video/
│   ├── karabakh-hero.mp4       # Основной формат
│   ├── karabakh-hero.webm      # Для лучшей совместимости
│   └── README.md               # Описание видео
└── img/
    ├── video-poster.jpg        # Превью до загрузки видео
    └── karabakh-fallback.jpg   # Fallback для мобильных
```

---

## Чек-лист перед внедрением

- [ ] Видео оптимизировано и < 5 MB
- [ ] Два формата готовы (MP4 + WebM)
- [ ] Создан poster image (JPG, оптимизирован)
- [ ] Fallback изображение для мобильных готово
- [ ] Overlay цвет подобран (#1a3056 с прозрачностью 0.7)
- [ ] Протестировано на разных браузерах
- [ ] Производительность проверена (PageSpeed Insights)

---

## Рекомендация

**Текущее решение**: Так как видео-контент пока недоступен, рекомендуется:

1. **Фаза 2-3**: Использовать улучшенный градиент CSS
2. **После получения видео**: Интегрировать HTML5 video с вариантом 1

**Placeholder на данный момент**: Создать статичное изображение с видом Шуши или использовать CSS анимацию градиента.

---

## Следующие шаги

1. ✅ Руководство создано
2. ⏳ Получить видео от клиента или найти stock footage
3. ⏳ Создать poster image и fallback
4. ⏳ Интегрировать в HTML/CSS (Фаза 3)
