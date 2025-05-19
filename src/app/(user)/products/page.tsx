'use client';
import { useState } from 'react';
import { Drawer } from '@/app/_components/ui/drawer';
import { Button } from '@/app/_components/ui/button';

export default function HomePage() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Button onClick={() => setShow(!show)}>open</Button>
      <Drawer isOpen={show} toggle={() => setShow(!show)}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat
          quod odio accusantium optio culpa magnam eius ipsum excepturi. Velit
          sapiente error ut consequuntur tempora, blanditiis nihil sint repellat
          exercitationem fugit culpa architecto ipsa modi illum non impedit, quo
          atque esse. Quidem repudiandae quod ducimus saepe voluptatibus magnam
          quia, non unde at enim tempore earum dolore totam. Suscipit qui nisi
          porro quam non similique ducimus aut dolorum voluptas deleniti,
          quaerat tenetur id voluptatum modi ut, nihil libero optio ipsum
          expedita impedit perspiciatis omnis nobis! Repudiandae, quas porro
          reprehenderit ab esse quam voluptas iure nesciunt praesentium dolore
          temporibus eius saepe magnam necessitatibus odio quis! Ex impedit
          architecto suscipit rem ab blanditiis sint velit, eligendi aliquid
          itaque nobis delectus placeat sed explicabo cum recusandae.
          Consequuntur ea asperiores rerum consequatur possimus molestiae
          dolorem? Ipsa architecto, tenetur neque incidunt exercitationem
          facilis distinctio odit sequi saepe. Quidem tempora nemo facilis sunt,
          ducimus nulla corporis maxime quisquam? Magnam laudantium doloribus
          nobis vero iure necessitatibus blanditiis pariatur quo ut
          voluptatibus, aliquid eius voluptas nemo aut ipsam nam. Ipsum
          accusamus laborum consequatur sapiente voluptas libero dolore eius
          quo, dicta ex cupiditate voluptatem, ratione quisquam a placeat enim.
          Excepturi debitis beatae fuga nisi sequi incidunt asperiores quaerat.
          Perferendis, esse.
        </div>
      </Drawer>
    </div>
  );
}
