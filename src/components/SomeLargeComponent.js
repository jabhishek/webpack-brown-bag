import React from 'react';
import moment from 'moment';

export const SomeLargeComponent = () => {
    return <div>
        <em><time>Today's date: {moment().format('DD MMM YYYY')}</time></em>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aspernatur beatae cumque delectus ducimus
            eaque fugit labore libero magnam maxime minus modi neque numquam officia perspiciatis porro quo recusandae
            reiciendis sed soluta sunt tempora vero vitae voluptas voluptatum! Accusamus aliquam amet architecto
            asperiores aspernatur at atque commodi culpa cum cupiditate, delectus deleniti dicta dolore dolorem
            doloremque dolorum ea eius harum illo illum iure nisi numquam perferendis, perspiciatis possimus quaerat
            ratione repudiandae, rerum sint sit soluta temporibus tenetur vel velit veniam vero vitae! Ab deleniti
            dignissimos, facere in ipsam ipsum maiores nesciunt provident quidem, rerum similique sint tempore
            temporibus! Doloribus, et.</p>

    </div>
}

export default SomeLargeComponent;
