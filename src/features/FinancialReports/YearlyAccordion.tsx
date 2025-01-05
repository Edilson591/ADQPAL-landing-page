import { prestacaoContas2024 } from "../../data/prestacaoContas2024";
import { Item } from "../../components/Accordion";

export const items: Item[] = [
  {
    id: 1,
    title: "2022",
    content: (
      <>
        {prestacaoContas2024.map((item, index) => (
          <div className="container-content__item" key={index}>
            <header className="accordion__content__header">
              <h5
                id="accordion__content__month-february"
                className="accordion__content__month"
              >
                {item.month}
              </h5>
            </header>
            <div
              id="accordion__content__body-february"
              className="accordion__content__body"
              aria-labelledby="accordion__content__month-february"
              role="region"
            >
              {item.files.map((item, index) => (
                <ul key={index} className="accordion__content__list">
                  <li className="accordion__content__list-item">
                    <a className="accordion__content__link" href={item.link}>
                      {item.title}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </>
    ),
  },
  {
    id: 2,
    title: "2023",
    content: (
      <>
        {prestacaoContas2024.map((item, index) => (
          <div className="container-content__item" key={index}>
            <header className="accordion__content__header">
              <h5
                id="accordion__content__month-february"
                className="accordion__content__month"
              >
                {item.month}
              </h5>
            </header>
            <div
              id="accordion__content__body-february"
              className="accordion__content__body"
              aria-labelledby="accordion__content__month-february"
              role="region"
            >
              {item.files.map((item, index) => (
                <ul key={index} className="accordion__content__list">
                  <li className="accordion__content__list-item">
                    <a className="accordion__content__link" href={item.link}>
                      {item.title}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </>
    ),
  },
  {
    id: 3,
    title: "2024",
    content: (
      <>
        {prestacaoContas2024.map((item, index) => (
          <div className="container-content__item" key={index}>
            <header className="accordion__content__header">
              <h5
                id="accordion__content__month-february"
                className="accordion__content__month"
              >
                {item.month}
              </h5>
            </header>
            <div
              id="accordion__content__body-february"
              className="accordion__content__body"
              aria-labelledby="accordion__content__month-february"
              role="region"
            >
              {item.files.map((item, index) => (
                <ul key={index} className="accordion__content__list">
                  <li className="accordion__content__list-item">
                    <a className="accordion__content__link" href={item.link}>
                      {item.title}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </>
    ),
  },
];
