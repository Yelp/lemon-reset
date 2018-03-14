"""Add '.lemon--' prefixes to meyer reset styles."""
import re
import sys


def _replace(s, to_remove):
    assert to_remove in s, (to_remove, s)
    return s.replace(to_remove, '')


def main():
    contents = sys.stdin.read()
    contents = re.sub('([a-z0-9:]+(,| {))', r'.lemon--\1', contents)
    sys.stdout.write(contents)


if __name__ == '__main__':
    exit(main())
