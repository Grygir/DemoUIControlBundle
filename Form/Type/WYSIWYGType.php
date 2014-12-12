<?php

namespace Acme\DemoUIControlBundle\Form\Type;

use Symfony\Component\Form\AbstractType;

class WYSIWYGType extends AbstractType
{
    const NAME = 'acme_demouicontrol_wysiwyg_type';

    /**
     * {@inheritdoc}
     */
    public function getParent()
    {
        return 'textarea';
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return self::NAME;
    }
}
