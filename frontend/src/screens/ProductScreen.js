import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

//get the url in the ProductScreen and display on the screen use a hook called UseParam
export default ProductScreen;
