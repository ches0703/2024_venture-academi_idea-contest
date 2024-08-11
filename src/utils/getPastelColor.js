function getPastelColor(value) {
  const hue = 60 + (value % 180);       // 색상 : 60도 ~ 240도(노랑 ~ 파랑)
  const saturation = 80 + (value % 20); // 채도 : 50% ~ 70% 
  const lightness = 85 + (value % 10);  // 명도 : 70% ~ 80% 
  const pastelColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return pastelColor;
}

export default getPastelColor