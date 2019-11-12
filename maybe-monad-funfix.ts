import { Option, Some } from 'funfix';

function getStringBad() : Option<string> {
  let value : string = 'a string';
  value = null;
  return Option.of(value);
}

function getStringGood() : Option<string> {
  return Option.of('success');
}
console.log(getStringBad().getOrElse('default'));
console.log(getStringGood().getOrElse('default'));

const s1 = getStringBad().getOrElseL<string>(() => getStringGood().getOrElse('default'));
console.log(s1);

const s2 = getStringBad()
            .orElse<string>(getStringBad())
            .getOrElse('default')

console.log(s2);
console.log('~~~~~~~~')

console.log(
  getStringGood().flatMap<string>(str => Some(str + 'end')).getOrElse('failed')
);
