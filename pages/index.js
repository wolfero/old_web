import Home,{getStaticProps as getStaticPropsHome} from './home';
export default Home;

export async function getStaticProps(){
  return getStaticPropsHome();
}