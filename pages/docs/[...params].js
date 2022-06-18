import { useRouter } from "next/router";
function Doc() {
  const router = useRouter();
  // const { params } = router.query;
  // console.log(params, "params"); //undefined [undefined because prerendering feature after that] --> //feature1 //concept1
  const { params = [] } = router.query;
  console.log(params);
  if (params.length == 2) {
    return (
      <h1>
        Viewing Docs for {params[0]} and {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing Docs for {params[0]}</h1>;
  }
  return <h1>Doc Home Page</h1>;
}

export default Doc;

//http://localhost:3000/docs/feature1/concept1
