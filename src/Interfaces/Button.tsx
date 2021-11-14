export default interface IButton{
    reset: ()=> void;
    percent: ()=> void;
    minusPlus: ()=> void;
    operatorType: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    inputNum: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    equals: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}