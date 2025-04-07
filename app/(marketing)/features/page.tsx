
import { Metadata } from "next";

const values = [
  {
    name: "كون عالمي",
    description:
      "حنا أول AI فالمغرب، وكنطمحو نكونو من الطراز العالمي، بجودة وخدمات كتواكب أحسن المعايير الدولية.",
  },
  {
    name: "شارك كلشي لي كتعرف",
    description:
      "المعرفة خاصها توصل للجميع! حنا كنآمنو بالتعاون وتقاسم المعلومات باش نطورو بعضياتنا.",
  },
  {
    name: "ديما التعلم",
    description:
      "التكنولوجيا كتحرك بسرعة، وحنا ديما كنتعلمو الجديد باش نبقاو فالطليعة ونقدمو لك أحسن تجربة.",
  },
  {
    name: "كون سند",
    description:
      "الدعم والتعاون أساس النجاح! حنا هنا باش نعاونوك، كيف ما نطمحو أنك تكون كتعاون الآخرين.",
  },
  {
    name: "تحمل المسؤولية",
    description:
      "الثقة كتجي من الالتزام، وحنا مسؤولين على تقديم خدمة بجودة عالية وبأمان تام.",
  },
  {
    name: "استمتع بالوقت ديالك",
    description:
      "الراحة ضرورية بحال الخدمة، وخاصنا نلقاو التوازن بين الابتكار والاستمتاع بالحياة.",
  },
];

export const metadata: Metadata = {
  title: "  المستقبل بلمسة مغربية",
  description:
    "نحن نطمح لجعل المغرب منارة للابتكار في شمال أفريقيا والعالم، مع الحفاظ على هويتنا الثقافية العريقة",
};

export default function Example() {
  return (
    <div className="dark:bg-[#1a1a1a] bg-[#f8f9fa]">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-black dark:text-primary sm:text-7xl">
                    نحن نغير الطريقة التي يتواصل بها الناس
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium dark:text-gray-400 text-neutral-700 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    مع التقدم التكنولوجي في المغرب، نعمل على تقديم الذكاء
                    الاصطناعي بما يتناسب مع ثقافتنا الغنية. نحن نطمح لجعل المغرب
                    منارة للابتكار في شمال أفريقيا والعالم، مع الحفاظ على هويتنا
                    الثقافية العريقة.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt="AI in Morocco"
                        src="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="AI in Morocco"
                        src="https://images.unsplash.com/photo-1580746738099-1cb74f972feb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt="AI in Morocco"
                        src="https://images.unsplash.com/photo-1550697318-929498858774?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt="AI in Morocco"
                        src="https://images.unsplash.com/photo-1552573033-b7bb437bf953?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt="AI in Morocco"
                        src="https://images.unsplash.com/photo-1591299089616-c9604047b1a6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-black dark:text-primary sm:text-5xl">
              مهمتنا
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 dark:text-gray-400 text-neutral-700">
                  نحن نسعى لتحويل المغرب إلى مركز رائد في مجال الذكاء الاصطناعي
                  في شمال أفريقيا والعالم. هدفنا هو دمج التكنولوجيا مع قيمنا
                  الثقافية العريقة، والابتكار بطريقة تحترم التراث وتعزز التنمية
                  المستدامة.
                </p>
                <p className="mt-10 max-w-xl text-base/7 dark:text-gray-400 text-neutral-700">
                  بتوجيه من قياداتنا الطموحة، نسعى إلى تبني الذكاء الاصطناعي
                  لتحسين الحياة اليومية للمغاربة وتعزيز مكانة المملكة في
                  الاقتصاد الرقمي. نعمل على تطوير حلول ذكية تساهم في تحسين مختلف
                  القطاعات مثل التعليم، الصحة، الزراعة، والطاقة. هدفنا هو جعل
                  المغرب نموذجًا عالميًا في مجال الابتكار الذكي.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1520168826876-820833331cc6?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-black dark:text-primary sm:text-5xl">
              أول ذكاء اصطناعي مغربي 🇲🇦
            </h2>
            <p className="mt-6 text-lg/8 dark:text-gray-400 text-neutral-700">
              تقنية متقدمة بلمسة مغربية—استكشف مستقبل الذكاء الاصطناعي المصمم
              خصيصًا لفهم ثقافتنا ولغتنا!
            </p>
          </div>
          <dl className="mx-auto py-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-black dark:text-primary">
                  {value.name}
                </dt>
                <dd className="mt-1 text-black dark:text-primary">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
