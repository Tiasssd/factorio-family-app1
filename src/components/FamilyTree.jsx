import React from 'react';
import "../style.css";

const FamilyTree = () => {
  return (
    <div className="family-tree-container">
      <h1>Мое семейное древо</h1>

      {/* Я */}
      <div className="family-member">
        <img
          src="avatar.png"
          alt="Шех Матвей Игоревич"
          className="family-photo"
        />
        <div className="family-member-content">
          <strong>Шех Матвей Игоревич</strong>
          <div className="family-relation">Я</div>
        </div>
      </div>

      {/* Линия к родителям */}
      <div className="vertical-line"></div>

      {/* Контейнер родителей */}
      <div className="parents-container">
        {/* Линия между родителями */}
        <div className="horizontal-line parent-line"></div>

        {/* Отец */}
        <div className="parent">
          <div className="vertical-short-line"></div>
          <div className="family-member">
            <img
              src="avatar.png"
              alt="Шех Игорь Валерьевич"
              className="family-photo"
            />
            <div className="family-member-content">
              <strong>Шех Игорь Валерьевич</strong>
              <div className="family-relation">Папа</div>
            </div>
          </div>

          {/* Линия к дедушке/бабушке (отца) */}
          <div className="vertical-line"></div>

          {/* Контейнер дедушки/бабушки отца */}
          <div className="grandparents-container">
            <div className="horizontal-line grandparent-line"></div>

            {/* Дедушка (отца) */}
            <div className="grandparent">
              <div className="vertical-short-line"></div>
              <div className="family-member">
                <img
                  src="avatar.png"
                  alt="Шех Валерий Александрович"
                  className="family-photo"
                />
                <div className="family-member-content">
                  <strong>Шех Валерий Александрович</strong>
                  <div className="family-relation">Дедушка</div>
                </div>
              </div>
            </div>

            {/* Бабушка (отца) */}
            <div className="grandparent">
              <div className="vertical-short-line"></div>
              <div className="family-member">
                <img
                  src="avatar.png"
                  alt="Ковган Валентина Семёновна"
                  className="family-photo"
                />
                <div className="family-member-content">
                  <strong>Ковган Валентина Семёновна</strong>
                  <div className="family-relation">Бабушка</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Мать */}
        <div className="parent">
          <div className="vertical-short-line"></div>
          <div className="family-member">
            <img
              src="avatar.png"
              alt="Андрончик Валентина Николаевна"
              className="family-photo"
            />
            <div className="family-member-content">
              <strong>Андрончик Валентина Николаевна</strong>
              <div className="family-relation">Мама</div>
            </div>
          </div>

          {/* Линия к дедушке/бабушке (матери) */}
          <div className="vertical-line"></div>

          {/* Контейнер дедушки/бабушки матери */}
          <div className="grandparents-container">
            <div className="horizontal-line grandparent-line"></div>

            {/* Дедушка (матери) */}
            <div className="grandparent">
              <div className="vertical-short-line"></div>
              <div className="family-member">
                <img
                  src="avatar.png"
                  alt="Андрончик Николай Иванович"
                  className="family-photo"
                />
                <div className="family-member-content">
                  <strong>Андрончик Николай Иванович</strong>
                  <div className="family-relation">Дедушка</div>
                </div>
              </div>
            </div>

            {/* Бабушка (матери) */}
            <div className="grandparent">
              <div className="vertical-short-line"></div>
              <div className="family-member">
                <img
                  src="avatar.png"
                  alt="Шидловская Янина Владимировна"
                  className="family-photo"
                />
                <div className="family-member-content">
                  <strong>Шидловская Янина Владимировна</strong>
                  <div className="family-relation">Бабушка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
