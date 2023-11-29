/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {InputNumber} from 'antd';

import {theme, Layout, usePlugin, useValue} from 'flipper-plugin';
import React, {useRef, useState} from 'react';
import {CompoundTypeHint} from '../../ClientTypes';
import {css, cx} from '@emotion/css';
import {plugin} from '../../index';
import {numberColor, readOnlyInput} from './shared';

type FourItemArray<T = any> = [T, T, T, T];

export function TwoByTwoNumberGroup({
  values,
}: {
  values: FourItemArray<NumberGroupValue>;
}) {
  return (
    <Layout.Container gap="small" style={{flex: '0 1 auto'}}>
      <NumberGroup values={[values[0], values[1]]} />
      <NumberGroup values={[values[2], values[3]]} />
    </Layout.Container>
  );
}

export type NumberGroupValue = {
  value: number;
  addonText: string;
  mutable: boolean;
  hint: CompoundTypeHint;
  onChange: (value: number, hint: CompoundTypeHint) => void;
};

export function NumberGroup({values}: {values: NumberGroupValue[]}) {
  return (
    <Layout.Horizontal gap="small">
      {values.map(({value, addonText, mutable, onChange, hint}, idx) => (
        <StyledInputNumber
          key={idx}
          color={numberColor}
          mutable={mutable}
          value={value}
          onChange={(value) => onChange(value, hint)}
          rightAddon={addonText}
        />
      ))}
    </Layout.Horizontal>
  );
}

export function StyledInputNumber({
  value,
  color,
  rightAddon,
  mutable,
  onChange,
}: {
  value: any;
  mutable: boolean;
  color: string;
  rightAddon?: string;
  onChange?: (value: number) => void;
}) {
  let formatted: any = value;
  if (typeof value === 'number') {
    //cap the number of decimal places to 5 but dont add trailing zeros
    formatted = Number.parseFloat(value.toFixed(5));
  }

  const instance = usePlugin(plugin);
  const frameTime = useValue(instance.currentFrameTime);
  const drityFrameTime = useRef(0);
  const [dirtyValue, setDirtyValue] = useState<number | null>(null);

  return (
    <InputNumber
      size="small"
      onChange={(value) => {
        if (value != null) {
          setDirtyValue(value);
          drityFrameTime.current = frameTime;
          onChange?.(value);
        }
      }}
      className={cx(
        // inputBase,
        !mutable && readOnlyInput,
        css`
          //set input colour when no suffix
          color: ${color};
          //set input colour when has suffix
          .ant-input.ant-input-sm[type='text'] {
            color: ${color};
          }
          //set colour of suffix
          .ant-input.ant-input-sm[type='text'] + .ant-input-suffix {
            color: ${theme.textColorSecondary};
            opacity: 0.7;
          }
          .ant-input-number: {
            background-color: red;
            border-right: none;
          }
          //style the add on to look like a suffix
          .ant-input-number-group-addon {
            padding-right: 4px;
            padding-left: 2px;
            border-left: none;
            border-color: ${theme.disabledColor};
            background-color: none;
          }
          ${rightAddon != null && 'border-right: none;'}
          padding-top: 1px;
          padding-bottom: 1px;
          width: 100%;
        `,
      )}
      bordered
      readOnly={!mutable}
      value={frameTime === drityFrameTime.current ? dirtyValue : formatted}
      addonAfter={
        rightAddon && (
          <span style={{color: theme.textColorSecondary}}>{rightAddon}</span>
        )
      }
    />
  );
}