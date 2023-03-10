import * as React from 'react';
import {useNavigate} from 'react-router-dom'
import './QuestionTab.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div >
          <text>{children}</text>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  let navigate = useNavigate();

  return (
    <div className="wrapper">
      <div  className="wrapper-inner">
          <button className="question-switch-button"
            label="QUESTION" {...a11yProps(0)} 
            onClick = {() => navigate("/creator/question")}>
            QUESTION
            </button>
          <button className="question-switch-button" label="RESPONSE" {...a11yProps(1)} 
          onClick = {() => navigate("/creator/response")}>
            RESPONSE
            </button>
      </div>
    </div>
  );
}