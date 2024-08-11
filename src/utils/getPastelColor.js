function getPastelColor(value, alpha) {
  const hue = 60 + (value % 180);       // 색상 : 60도 ~ 240도(노랑 ~ 파랑)
  const saturation = 80 + (value % 20); // 채도 : 50% ~ 70% 
  const lightness = 85 + (value % 10);  // 명도 : 70% ~ 80% 
  if (alpha) {
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  } else {
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }
}

export default getPastelColor