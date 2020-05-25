import React from 'react';

import { Container, Content, Instructor } from './styles';

import iconSvg from '../../assets/icones.svg';

import instructor1Img from '../../assets/instructor1.png';
import instructor2Img from '../../assets/instructor2.png';

const Instructors: React.FC = () => (
  <Container>
    <Content>
      <div>
        <div>
          <h2>
            Com quem você vai aprender?
            <img src={iconSvg} alt="" />
          </h2>
          <div>
            <p>
              Programação é um universo vasto e em constante transformação. Por
              isso as oportunidades são enormes, mas a jornada nem sempre é
              clara. E muitos devs acabam dando voltas sem nunca atingir os
              objetivos.
            </p>
            <p>
              Então a melhor forma de acelerar sua evolução é ter alguém que já
              tenha passado por esse caminho e possa te guiar.
            </p>
          </div>
        </div>
        <div>
          <Instructor>
            <div>
              <img src={instructor1Img} alt="Diego Fernandes" />
              <svg width="1em" height="1em" viewBox="0 0 91 80" fill="none">
                <circle cx="44" cy="40" r="28" fill="#202024"></circle>
                <path
                  d="M76.02 19.33C66.674 14.215 57.213 8.982 47.868 3.871a6.552 6.552 0 00-6.154 0c-9.346 5.116-18.692 10.348-28.038 15.46a5.815 5.815 0 00-2.19 2.035 5.793 5.793 0 00-.887 2.852v31.147a5.638 5.638 0 00.885 2.951 5.66 5.66 0 002.307 2.05c2.62 1.361 5.129 2.841 7.75 4.205l15.273 8.412 4.673 2.614a4.05 4.05 0 001.025.455l.456.227h.115a6.583 6.583 0 004.673-.454c9.346-5.116 18.691-10.348 28.037-15.46a5.729 5.729 0 002.296-2.055c.563-.882.873-1.9.896-2.945V24.218a5.832 5.832 0 00-.843-2.83 5.853 5.853 0 00-2.122-2.058zM35.56 54.228l-7.295 6.707a.419.419 0 01-.342.113h-.115a.219.219 0 01-.113-.34l2.62-9.55a3.17 3.17 0 012.049-2.273l.113-.114a1.004 1.004 0 01.797.114c.456.34.797.568 1.255.91.429.306.886.573 1.365.795a.77.77 0 01.456.68l.228.228a3.204 3.204 0 01-1.02 2.73h.001zm7.521-6.593c-.113 0-.113.115-.228.115l-2.28-.228a.841.841 0 00-.682.228l-2.508 2.273a.42.42 0 01-.342.115 17.006 17.006 0 01-3.413-2.043c-.115-.113-.228-.227-.115-.34l.797-3.296a.75.75 0 00-.113-.681l-1.255-1.932c0-.114-.113-.114-.113-.227 0-.228.113-.455.113-.796v-.113s.114-.114.114 0c1.026.681 5.357 3.297 5.357 3.297s4.331 2.614 5.356 3.296a.417.417 0 01.114.34l-.802-.008zm15.272-20.801l.114.113 2.28.34h.113c.456.114 1.025.68.228 1.705L51.514 41.95a.684.684 0 01-.456.113l-3.876-2.387a1.232 1.232 0 00-1.253 0l-1.253.795a1.231 1.231 0 01-1.255 0 1.778 1.778 0 00-2.393.227 4.803 4.803 0 01-5.585.228l-5.128-3.183-.228-.228a1.478 1.478 0 01-.436-1.65c.071-.19.18-.363.322-.51a1.684 1.684 0 012.279-.567l1.025.568h.119c.114.113.228 0 .228-.115l.228-1.361c0-.113 0-.227-.114-.227l-.228-.115a1.054 1.054 0 01-.342-1.361.914.914 0 011.253-.34l6.953 4.205h.114c.114.113.228 0 .342-.113l7.18-9.776a1.265 1.265 0 011.253-.455l1.824.228 1.253.227c0 .114.115 0 .115 0 .113-.113.113-.113 0-.113a1.077 1.077 0 01-.228-1.477l2.393-3.296a1.32 1.32 0 011.14-.455l4.558.68a.595.595 0 01.456.228l.114.113a.56.56 0 01-.114.795s-2.28 3.07-3.077 4.206v.113c-.572-.343-.572-.229-.344-.116v.002z"
                  fill="#04D361"
                ></path>
                <path
                  d="M54.136 7.395c3.533-2.723 5.472-3.297 8.434-3.297.868 0 1.725.194 2.508.568 2.622 1.477 3.761 5.91 2.964 12.277l3.76 2.042c1.254-9.093-.455-15.345-4.9-17.847A9.048 9.048 0 0062.344.001c-3.99 0-7.181 1.137-12.195 5.116 1.48.799 2.727 1.596 3.987 2.278zM10.6 47.18c-5.243-2.501-6.498-4.547-6.498-7.389 0-2.956 2.964-5.797 8.32-8.299v-4.547C4.446 30.24 0 34.789 0 39.677c0 5 2.621 8.526 10.6 11.822V47.18zM21.198 15.124c-.683-6.252.456-8.866 3.192-10.348a4.075 4.075 0 012.508-.567c2.963 0 6.382 1.591 9.915 4.32l3.76-2.042C35.674 2.508 30.773.234 26.787.234a9.052 9.052 0 00-4.559 1.137c-4.445 2.614-6.268 6.935-4.9 16.028 1.365-.91 2.618-1.593 3.871-2.275zM78.869 28.084v4.32c5.242 2.5 6.496 4.546 6.496 7.389 0 2.956-2.963 5.797-8.32 8.298v4.547c7.978-3.297 12.423-7.844 12.423-12.732-.002-5.003-2.508-8.526-10.6-11.822zM35.445 72.075c-3.535 2.723-5.472 3.296-8.434 3.296a5.817 5.817 0 01-2.508-.568c-2.73-1.477-3.76-6.025-2.964-12.277-1.253-.68-2.62-1.361-3.874-2.16-1.255 8.987.456 15.232 4.786 17.733a9.053 9.053 0 004.558 1.137c3.99.113 7.294-1.022 12.31-5l-3.874-2.161zM68.27 64.458c.682 6.252-.57 8.866-3.192 10.348a4.074 4.074 0 01-2.508.568c-2.964 0-6.382-1.592-10.03-4.32-1.253.68-2.507 1.36-3.875 2.042 5.015 4.092 9.802 6.365 13.904 6.365a9.054 9.054 0 004.56-1.137c4.444-2.614 6.381-6.934 4.9-16.028-1.138.683-2.506 1.364-3.76 2.162z"
                  fill="#E6E6E6"
                ></path>
              </svg>
            </div>
            <h3>Diego Fernandes</h3>
            <h4>CTO na Rocketseat</h4>
            <p>
              Programador há 10 anos e apaixonado pelas melhores tecnologias de
              desenvolvimento back-end, front-end e mobile, vai ser o
              responsável por guiar os devs através do ecossistema da OmniStack.
            </p>
          </Instructor>
          <Instructor>
            <br />
            <br />
            <div>
              <img src={instructor2Img} alt="Mayk Brito" />
              <svg width="1em" height="1em" viewBox="0 0 72 80" fill="none">
                <g clip-path="url(#Launchbase_svg__clip0)">
                  <circle cx="36" cy="40" r="28" fill="#202024"></circle>
                  <path
                    d="M35.665 79.999a2.55 2.55 0 01-.756-.115l-27.865-8.66a2.496 2.496 0 01-1.207-.815 2.419 2.419 0 01-.534-1.338L.008 2.65a2.413 2.413 0 01.13-.998c.114-.32.293-.613.528-.862.235-.249.52-.447.836-.583A2.549 2.549 0 012.506 0h66.316c.345 0 .687.07 1.004.206.317.136.601.334.836.583.234.249.414.542.527.862.114.32.158.66.131.998L66.027 69.07a2.418 2.418 0 01-.534 1.338c-.31.383-.73.666-1.207.813l-27.86 8.662a2.546 2.546 0 01-.76.115zM23.75 47.864a.86.86 0 00-.275.046l-.132.067c-.531.17-1.01.468-1.393.867a3.264 3.264 0 00-.8 1.413l-2.725 9.772a.283.283 0 00.132.355.299.299 0 00.135.036.5.5 0 00.332-.065l7.574-6.84c.391-.38.69-.84.874-1.347a3.5 3.5 0 00.188-1.585l-.198-.196a.928.928 0 00-.465-.652 6.43 6.43 0 01-1.396-.78 13.726 13.726 0 01-1.33-.913.863.863 0 00-.52-.176v-.002zm.113-8.45a.13.13 0 00-.092.039.126.126 0 00-.03.052v.067c.012.263-.011.525-.07.781a.387.387 0 00.07.262l1.262 2.02a.896.896 0 01.133.716l-.863 3.387c-.06.117-.017.245.132.391.533.45 1.112.842 1.728 1.173a10.11 10.11 0 001.857.977.312.312 0 00.291.014.313.313 0 00.108-.08l2.657-2.345a.81.81 0 01.664-.196l2.392.196h.04c.081 0 .16-.023.226-.067l.73-.391a.419.419 0 01-.037-.15c-.008-.073-.015-.135-.095-.176-1.043-.64-5.472-3.297-5.515-3.323l-.007-.004c-.458-.274-4.504-2.702-5.508-3.318a.132.132 0 00-.073-.024v-.001zm14.13-1.147c.226 0 .447.068.632.196l4.053 2.413a.5.5 0 00.21.043.28.28 0 00.255-.108l9.965-13.29a1.277 1.277 0 00.35-1.162.896.896 0 00-.619-.532h-.069l-2.386-.33c-.069 0-.069 0-.132-.067a.25.25 0 01-.136-.178.24.24 0 01.067-.213 452.358 452.358 0 003.256-4.3.555.555 0 00.2-.423.545.545 0 00-.2-.424 1.365 1.365 0 00-.53-.26l-4.716-.717a1.223 1.223 0 00-.629.076 1.2 1.2 0 00-.501.38l-2.528 3.389a1.115 1.115 0 00.2 1.563.045.045 0 01.046.023c.011.027-.007.068-.046.108 0 0-.031.029-.05.029-.002 0-.005 0-.007-.002a.014.014 0 01-.005-.005.04.04 0 01-.005-.022l-1.26-.193-1.858-.196a1.356 1.356 0 00-.705.089 1.326 1.326 0 00-.557.432L32.775 34.62a.248.248 0 01-.224.135.25.25 0 01-.175-.068l-7.175-4.3a.977.977 0 00-.733-.107.975.975 0 00-.595.433 1.045 1.045 0 00-.068.759c.073.253.24.47.466.61l.2.13a.336.336 0 01.133.26l-.2 1.433a.145.145 0 01-.036.105.151.151 0 01-.1.05.091.091 0 01-.065-.025h-.069l-1.062-.586a1.779 1.779 0 00-1.356-.218c-.229.054-.445.154-.634.292-.19.138-.349.312-.468.512a1.55 1.55 0 00-.374 1.149 1.537 1.537 0 00.574 1.066c.093.06.182.125.266.196l5.383 3.257a4.954 4.954 0 002.922.831 4.943 4.943 0 002.857-1.026c.38-.352.87-.568 1.391-.614a1.98 1.98 0 011.066.354 1.225 1.225 0 001.33 0l1.33-.782c.185-.13.407-.199.634-.199z"
                    fill="#FD951F"
                  ></path>
                </g>
                <defs>
                  <clipPath id="Launchbase_svg__clip0">
                    <path fill="#fff" d="M0 0h72v80H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3>Mayk Brito</h3>
            <h4>Expert na Rocketseat</h4>
            <p>
              Programador há 12 anos e apaixonado por ajudar quem está dando os
              primeiros passos, vai ser o reponsável por guiar os alunos que
              desejam entrar no desenvolvimento web com o pé direito.
            </p>
          </Instructor>
        </div>
      </div>
    </Content>
  </Container>
);

export default Instructors;
