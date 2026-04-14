import { Helmet } from "react-helmet-async";

interface SchemaProps {
  data: any;
}

export default function Schema({ data }: SchemaProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}
