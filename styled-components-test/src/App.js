import React, { Component } from "react"
import styled, {css} from "styled-components"

const TitleEvent = styled.h1`
  font-weight: bold;
  font-size: 20px;

  ${props => props.option === 'clasico' && css`
      font-family: "Arial";
      color: #181818;
    `}
  ${props => props.option === 'vintage' && css`
    font-family: "Times New Roman";
  `}
  ${props => props.option === 'moderno' && css`
      font-family: "Verdana";
    `}
`;

const DescriptionEvent = styled(TitleEvent)`
    font-weight: normal;
    font-size: 14px;
    text-align: justify;
`;

const CommentWrapper = styled.div`
  border: 1px solid #ccc;
  ${props => props.option === 'clasico' && css`
    border-radius: 5px;
  `}
  ${props => props.option === 'vintage' && css`
  border-radius: 0px;
  `}
  ${props => props.option === 'moderno' && css`
    border-radius: 15px;
  `}
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'clasico',
    };
  }

handleOptionChange = (e) => {
  console.log(e.target.value);
  this.setState({selectedOption: e.target.value});
}

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        {selectedOption}
        <select onChange = {this.handleOptionChange} value={selectedOption}>
          <option value="clasico">Clásico</option>
          <option value="vintage">Vintage</option>
          <option value="moderno">Moderno</option>
        </select>
        <TitleEvent option={selectedOption}>Nombre del evento</TitleEvent>
        <DescriptionEvent option={selectedOption}>
          Voluptate duis eu ipsum irure. Laboris sunt sunt culpa ea sint enim
          Lorem Lorem. Non Lorem dolore amet anim adipisicing commodo proident.
          Exercitation ad consequat proident nisi pariatur fugiat consectetur
          fugiat. Ad cupidatat consequat in ut aute velit.
        </DescriptionEvent>
        <DescriptionEvent option={selectedOption}>
          Aliqua irure eiusmod duis aliquip cillum qui reprehenderit ex amet
          elit adipisicing aute. Est aute esse magna dolore mollit culpa elit ut
          commodo dolor pariatur. Aliqua aute duis elit mollit incididunt in.
          Amet anim officia dolore mollit nisi culpa in irure voluptate ad
          excepteur reprehenderit. Ex magna et pariatur laboris ex cillum
          deserunt. Culpa pariatur mollit ullamco elit est sunt sunt nisi
          incididunt.
        </DescriptionEvent>
        <DescriptionEvent option={selectedOption}>
          Irure amet nostrud amet aliqua eiusmod aliquip magna. Reprehenderit
          voluptate sunt nisi ad amet et. Qui magna voluptate velit qui
          voluptate reprehenderit non sit dolore consequat excepteur amet. Culpa
          consectetur sunt exercitation et duis in magna ullamco culpa amet. Ex
          aliqua dolor dolor voluptate qui ea cillum ullamco.
        </DescriptionEvent>
        <DescriptionEvent option={selectedOption}>
          Nisi esse Lorem reprehenderit ea fugiat ex nisi nulla anim. Aute
          cupidatat consequat sint labore laborum nulla elit. Nulla mollit elit
          fugiat consectetur Lorem enim.
        </DescriptionEvent>
        <DescriptionEvent option={selectedOption}>
          Minim adipisicing fugiat pariatur veniam incididunt cillum consectetur
          ipsum. Non tempor est enim laborum magna adipisicing mollit anim
          incididunt dolore esse nostrud magna. Culpa dolor esse elit magna
          deserunt incididunt consequat.
        </DescriptionEvent>
        <CommentWrapper option={selectedOption}>
          Comentario
        </CommentWrapper>
      </div>
    )
  }
}

export default App
