import { Container } from "./styles";

interface IMenu {
  item1?: string;
  item2?: string;
  onclick1?: () => void;
  onclick2?: () => void;
}

export const Menu = (props: IMenu) => {
  return (
    <>
      <Container>
        <nav className="menu">
          <ol>
            <li>
              <p className="btn item1-button" onClick={props.onclick1}>
                {props.item1}
              </p>
            </li>
            <li>
              <p className="btn" onClick={props.onclick2}>
                {props.item2}
              </p>
            </li>
          </ol>
        </nav>
      </Container>
    </>
  );
};
