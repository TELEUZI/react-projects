import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '../components/Button';
import { ColorView } from '../components/ColorView';
import useRandomValues from '../hooks/useRandomValues';

const ButtonRapper = {
  marginBottom: '20px',
};
const ColorContainer = () => {
  const [randomValues, addBlock, deleteLastBlock] = useRandomValues();
  return (
    <div>
      <div style={ButtonRapper}>
        <Button label="Add block" onClick={() => addBlock()} />
        <Button
          disabled={randomValues?.length === 0}
          label="Delete block"
          onClick={() => deleteLastBlock()}
        />
      </div>

      <div>
        <TransitionGroup className="list">
          {randomValues?.length === 0 ? (
            <CSSTransition
              key={Date.now()}
              timeout={1000}
              classNames="color-block"
            >
              <div style={{ textAlign: 'center', order: -1 }}>
                No blocks yet...
              </div>
            </CSSTransition>
          ) : (
            randomValues.map((value) => (
              <CSSTransition
                key={value.number}
                timeout={500}
                classNames="color-block"
              >
                <div>
                  <ColorView
                    key={value.number}
                    backgroundColor={value.color}
                    number={value.number}
                  />
                </div>
              </CSSTransition>
            ))
          )}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default ColorContainer;
