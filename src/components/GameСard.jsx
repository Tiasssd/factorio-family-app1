import React from 'react';
import "../style.css";

const GameCard = () => {
  return (
    <div>
      {/* Фоновый трейлер через iframe */}
      <iframe
        className="game-background-video"
        src="https://www.youtube.com/embed/J8SBp4SyvLc?autoplay=1&mute=1&loop=1&playlist=J8SBp4SyvLc&controls=0&modestbranding=1&iv_load_policy=3&rel=0&vq=hd1080"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Factorio Trailer"
      ></iframe>

      {/* Заголовок (логотип и название) – верхний левый угол */}
      <div className="game-card-header">
        <img
          src="https://www.factorio.com/static/img/factorio-wheel.png"
          alt="Factorio Logo"
          className="game-logo"
        />
        <h1 className="game-title">Factorio</h1>
      </div>

      {/* Контент карточки – нижний правый угол */}
      <div className="game-card-content">
        <p>
          Factorio – это игра о строительстве и оптимизации автоматизированных производств. В ней каждый элемент системы продуман до мельчайших деталей.
        </p>
        <p>
          Официальные DLS: откройте для себя дополнительный контент, расширяющий вселенную Factorio.
        </p>
        <a
          href="https://wiki.factorio.com"
          target="_blank"
          rel="noreferrer"
          className="game-wiki-link"
        >
          Вики игры
        </a>
        <a
          href="https://www.factorio.com"
          target="_blank"
          rel="noreferrer"
          className="game-link"
        >
          Перейти на официальный сайт игры
        </a>
      </div>
    </div>
  );
};

export default GameCard;
