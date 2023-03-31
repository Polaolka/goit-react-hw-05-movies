import { Title, Wrapper, Btn } from './HomeSubheader.styled';
import { Container } from 'components/Container/Container';

const HomeSubheader = ({ getDayData, getWeekData, isDayFetch }) => {
  const handleClickDay = () => {
    if (isDayFetch) {
      console.log('лишаеться день, виходимо');
      return;
    }
    if (!isDayFetch) {
      console.log('змінюємо на день');
      getDayData();
      return;
    }
  };
  const handleClickWeek = () => {
    if (isDayFetch) {
      console.log('змінюємо на тиждень');
      getWeekData();
      return;
    }
    if (!isDayFetch) {
      console.log('лишаеться тиждень, виходимо');
      return;
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Trending movies</Title>
        <Btn type="button" name="day" onClick={handleClickDay}>
          by day
        </Btn>
        <Btn type="button" name="week" onClick={handleClickWeek}>
          by week
        </Btn>
      </Wrapper>
    </Container>
  );
};
export default HomeSubheader;
