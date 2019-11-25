import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Opcoes from 'components/Opcoes'
const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "O quão satisfeito com as políticas ambientais do país você está atualmente?";
    case 1:
      return "Quanto você considera a natureza importante?";
    case 2:
      return "Quanto você está disposto a mudar seus hábitos para melhorar a natureza?";
    case 3:
      return "Você economiza muita ou pouca água?";
   
    case 4:
      return "Quanto você conscientiza as pessoas ao seu redor da importância da natureza?";
    case 5:
         return  "Quanto você apoia políticos que não respeitam o meio ambiente?";
    case 6:
      return "Quanto você participa de eventos relacionados ao meio ambiente?";
    case 7:
      return "Quanto você evita consumir produtos em embalagens plásticas?";
    case 8:
      return "Quanto você evita consumir de materiais descartáveis?";
      case 9:
            return "Você economiza muita ou pouca energia?";
    default:
      return "";
  }
}

function getStatus(nota){
    if(nota < 30 ) return "Você tem muito a melhorar";
    else if(nota >= 30 && nota < 70 ) return "Você está no caminho certo";
    else if(nota >= 70 && nota < 90 ) return "Você já é quase um ativista do meio ambiente";
    else return "Você ama muito a natureza parabéns!";
}
const opcoes = [[10, 5, 3, 2],[10, 5, 3, 2]];

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [soma, setSoma] = React.useState(0);
  const [valorAtual, setValorAtual] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    setSoma((soma)=> soma+ valorAtual);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div  className='d-flex justify-content-center w-100'>
            <Typography className={classes.instructions}>
              Parabéns você fez {soma} pontos,
              {getStatus(soma)}
            </Typography>
           
          </div>
        ) : (
            <div>
          <div className="d-flex flex-column w-100 justify-content-center align-items-center">
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
           
            <Opcoes opcoes={opcoes[activeStep] ? opcoes[activeStep] : opcoes[0]} onSelect={(valor)=>setValorAtual(valor)}/>
            </div>
                <div className='d-flex justify-content-end w-100'>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Voltar
              </Button>
              <div className='d-flex justify-content-end w-100'>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed} align="center">
                    Passo {activeStep + 1} Tudo completo
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Tudo pronto"
                      : "Proximo"}
                  </Button>
                ))}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
